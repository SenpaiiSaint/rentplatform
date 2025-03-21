import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tenantId, amount } = body;

    if (!tenantId || !amount) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const invoice = await prisma.invoice.findFirst({
      where: {
        tenantId: Number(tenantId),
        status: "UNPAID",
      },
      orderBy: { dueDate: "asc" },
    });

    if (!invoice) {
      return NextResponse.json({ error: "No unpaid invoice found" }, { status: 404 });
    }

    // Create the payment record
    const payment = await prisma.rentPayment.create({
      data: {
        tenantId,
        amount,
        status: "PENDING",
        invoiceId: invoice.id,
      },
    });

    // Update the invoice payment amount and status
    const updatedPaidAmount = invoice.paidAmount.toNumber() + amount;
    const newInvoiceStatus =
      updatedPaidAmount >= invoice.amount.toNumber() ? "PAID" : "UNPAID";

    await prisma.invoice.update({
      where: { id: invoice.id },
      data: {
        paidAmount: updatedPaidAmount,
        status: newInvoiceStatus,
      },
    });

    return NextResponse.json(payment, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
