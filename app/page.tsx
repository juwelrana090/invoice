"use client";

import { useState } from "react";

/* ─── Types ──────────────────────────────────────────────────────────────────── */
interface InvoiceItem {
  id: string;
  sl: number;
  name: string;
  qty: number;
  unitPrice: number;
  tax: string;
  discount: string;
  total: number;
}

interface CompanyInfo {
  nameAr: string;
  nameEn: string;
  addressAr: string;
  addressEn: string;
  crAr: string;
  cr: string;
  poBoxAr: string;
  poBox: string;
  taxNo: string;
  phones: string;
  email: string;
}

/* ─── Furniture SVG Icon ─────────────────────────────────────────────────────── */
const FurnitureIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={100}
    height={100}
    style={{ enableBackground: "new 0 0 512 512" } as React.CSSProperties}
    xmlSpace="preserve"
  >
    <g>
      <g data-name="Layer 48">
        <path
          d="M29.37 55h-1.74A3.64 3.64 0 0 1 24 51.37V40.63A3.64 3.64 0 0 1 27.63 37h1.74a3.7 3.7 0 0 1 .87.11A3.61 3.61 0 0 1 33 40.63v10.74A3.64 3.64 0 0 1 29.37 55zm-1.74-16A1.63 1.63 0 0 0 26 40.63v10.74A1.63 1.63 0 0 0 27.63 53h1.74A1.63 1.63 0 0 0 31 51.37V40.63a1.63 1.63 0 0 0-1.24-1.58 1.81 1.81 0 0 0-.39 0zM57.37 55h-1.74A3.64 3.64 0 0 1 52 51.37V40.63a3.61 3.61 0 0 1 2.76-3.52 3.7 3.7 0 0 1 .87-.11h1.74A3.64 3.64 0 0 1 61 40.63v10.74A3.64 3.64 0 0 1 57.37 55zm-1.74-16a1.81 1.81 0 0 0-.39 0A1.63 1.63 0 0 0 54 40.63v10.74A1.63 1.63 0 0 0 55.63 53h1.74A1.63 1.63 0 0 0 59 51.37V40.63A1.63 1.63 0 0 0 57.37 39zM22 50H3V38h19zM5 48h15v-8H5z"
          fill="#000"
        />
        <path
          d="M20 48h2v7h-2zM3 48h2v7H3zM51 55H34a3 3 0 0 1-3-3v-6h23v6a3 3 0 0 1-3 3zm-18-7v4a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-4z"
          fill="#000"
        />
        <path
          d="M54 48H31v-3a5 5 0 0 1 5-5h13a5 5 0 0 1 5 5zm-21-2h19v-1a3 3 0 0 0-3-3H36a3 3 0 0 0-3 3z"
          fill="#000"
        />
        <path
          d="M54 45h-2a3 3 0 0 0-3-3H36a3 3 0 0 0-3 3h-2v-4.37a1.63 1.63 0 0 0-1.24-1.58l-.76-.18V31a7 7 0 0 1 7-7h13a7 7 0 0 1 7 7v7.87l-.76.18A1.63 1.63 0 0 0 54 40.63zm-18-5h13a5 5 0 0 1 3 1v-.37a3.6 3.6 0 0 1 2-3.24V31a5 5 0 0 0-5-5H36a5 5 0 0 0-5 5v6.39a3.6 3.6 0 0 1 2 3.24V41a5 5 0 0 1 3-1zM10 43h5v2h-5zM15.75 40h-6.5l-2.58-9h11.66zm-5-2h3.5l1.42-5H9.33z"
          fill="#000"
        />
        <path
          d="M12.5 33a3.92 3.92 0 0 1-.76-.08A8.1 8.1 0 0 1 5 25v-1h1a7.94 7.94 0 0 1 5.1 1.82l.37.29v.47A6.09 6.09 0 0 0 12.5 30a6.1 6.1 0 0 0 1.07-3.41v-.47l.37-.29A7.94 7.94 0 0 1 19 24h1v1a8.06 8.06 0 0 1-6.86 8 3.23 3.23 0 0 1-.64 0zm3.05-5.95a8 8 0 0 1-1 3.41 6 6 0 0 0 3.41-4.41 5.87 5.87 0 0 0-2.41 1.01zm-8.49-1a6.15 6.15 0 0 0 3.41 4.41 8.09 8.09 0 0 1-1-3.41 5.87 5.87 0 0 0-2.41-.99z"
          fill="#000"
        />
        <path
          d="m12.5 32.91-.71-.7c-.17-.18-.34-.36-.5-.55a8.09 8.09 0 0 1 .5-10.87l.71-.7.71.7a8 8 0 0 1 2.36 5.71v.05a8 8 0 0 1-1.84 5.08c-.18.22-.35.4-.52.58zm0-9.86a6.1 6.1 0 0 0 0 6.9 6.1 6.1 0 0 0 1.07-3.41h1-1a6 6 0 0 0-1.07-3.49zM24 20h2v24h-2z"
          fill="#000"
        />
        <path
          d="M33.1 22H16.9l1.19-13h13.82zm-14-2h11.8l-.81-9H19.91z"
          fill="#000"
        />
      </g>
    </g>
  </svg>
);

/* ─── Main Component ──────────────────────────────────────────────────────────── */
export default function InvoicePage() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    nameAr: "مفروشات الكنوز",
    nameEn: "AL-KUNOOZ FURNITURE",
    addressAr: "حفر الباطن - الخالدية - شارع الملك سعود",
    addressEn: "Hafr Al Baten-Al-Khalidiya-King Saud Street.",
    crAr: "سجل تجاري : ٢٥١١١٠١٢٨٠",
    cr: "2511101280",
    poBoxAr: "رمز بريدي: ٣٩٩٥٣",
    poBox: "39953",
    taxNo: "310049782700003",
    phones: "0508197124 / 0533556473 / 0553479050",
    email: "alkunooz2022@gmail.com",
  });

  const [billTo, setBillTo] = useState({ name: "", phone: "" });

  const [invoiceDetails, setInvoiceDetails] = useState({
    no: "23-200-000055",
    date: new Date().toISOString().split("T")[0],
    dueDate: "",
    paymentStatus: "Unpaid",
    taxRate: 15,
  });

  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: "1",
      sl: 1,
      name: "",
      qty: 1,
      unitPrice: 0,
      tax: "15%",
      discount: "0.00%",
      total: 0,
    },
  ]);

  /* Cash paid — editable so the "amount due" reflects partial payment */
  const [cashPaid, setCashPaid] = useState(0);

  const [notesAr1, setNotesAr1] = useState(
    "شهور 3 بعد البضاعة عن مسؤول غير المحل",
  );
  const [notesAr2, setNotesAr2] = useState(
    "الفاتورة كامل سداد قبل البضاعة بأخذ لايسمح المحل",
  );

  /* ─── helpers ─────────────────────────────────────────────────────────── */
  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const subtotal = items.reduce((s, i) => s + i.total, 0);
  const tax = subtotal * (invoiceDetails.taxRate / 100);
  const total = subtotal + tax;
  const amountDue = Math.max(0, total - cashPaid);

  /* ─── item helpers ───────────────────────────────────────────────────── */
  const addItem = () => {
    const sl = items.length + 1;
    setItems([
      ...items,
      {
        id: Date.now().toString(),
        sl,
        name: "",
        qty: 1,
        unitPrice: 0,
        tax: `${invoiceDetails.taxRate}%`,
        discount: "0.00%",
        total: 0,
      },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length === 1) return;
    setItems(
      items.filter((i) => i.id !== id).map((i, idx) => ({ ...i, sl: idx + 1 })),
    );
  };

  const updateItem = (
    id: string,
    field: keyof InvoiceItem,
    value: string | number,
  ) => {
    setItems(
      items.map((item) => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: value };
        if (field === "qty" || field === "unitPrice") {
          updated.total = Number(updated.qty) * Number(updated.unitPrice);
        }
        return updated;
      }),
    );
  };

  /* ─── shared input class ─────────────────────────────────────────────── */
  const editable =
    "bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4 font-sans">
      {/* ── Toolbar (hidden on print) ─────────────────────────────────── */}
      <div className="mb-4 flex gap-2 no-print">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 font-semibold shadow-md"
        >
          🖨️ Print
        </button>
        <button
          onClick={addItem}
          className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold shadow-md"
        >
          ➕ Add Item
        </button>
      </div>

      {/* ── Invoice Page ──────────────────────────────────────────────── */}
      <div className="bg-white w-full max-w-3xl shadow-2xl print:shadow-none">
        {/* ── HEADER ──────────────────────────────────────────────────── */}
        <div className="border-b-2 border-gray-900 p-6">
          <div className="flex items-start justify-between gap-4">
            {/* Arabic / bilingual block */}
            <div className="flex-1" dir="rtl">
              {/* Title — read-only, just styled */}
              <p className="text-xl font-extrabold text-gray-900 leading-tight">
                فاتورة ضريبية مبسطة-SIMPLIFIED TAX INVOICE
              </p>

              {/* Company name */}
              <input
                type="text"
                value={`${companyInfo.nameAr} - ${companyInfo.nameEn}`}
                onChange={(e) => {
                  const [ar, en] = e.target.value.split(" - ");
                  setCompanyInfo({
                    ...companyInfo,
                    nameAr: ar ?? "",
                    nameEn: en ?? "",
                  });
                }}
                className={`text-base font-bold text-slate-800 mt-1 ${editable} text-left`}
              />

              {/* Arabic address lines */}
              <div className="mt-2 text-xs text-slate-700 leading-5 space-y-0.5">
                <input
                  type="text"
                  value={companyInfo.addressAr}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
                      addressAr: e.target.value,
                    })
                  }
                  className={`${editable} text-left`}
                />
                <input
                  type="text"
                  value={companyInfo.crAr}
                  onChange={(e) =>
                    setCompanyInfo({ ...companyInfo, crAr: e.target.value })
                  }
                  className={`${editable} text-left`}
                />
                <input
                  type="text"
                  value={companyInfo.poBoxAr}
                  onChange={(e) =>
                    setCompanyInfo({ ...companyInfo, poBoxAr: e.target.value })
                  }
                  className={`${editable} text-left`}
                />
              </div>
            </div>

            {/* Logo */}
            <div className="border-2 border-gray-900 p-2 bg-white shadow-md shrink-0">
              <FurnitureIcon />
            </div>
          </div>

          {/* English address */}
          <div className="mt-4 text-xs text-slate-700 leading-5 space-y-0.5">
            <input
              type="text"
              value={companyInfo.addressEn}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, addressEn: e.target.value })
              }
              className={editable}
            />
            <div className="flex gap-3 items-center">
              <span className="font-semibold text-slate-800 shrink-0">C.R</span>
              <input
                type="text"
                value={companyInfo.cr}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, cr: e.target.value })
                }
                className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-28"
              />
              <span className="font-semibold text-slate-800 shrink-0">
                P.O.Box:
              </span>
              <input
                type="text"
                value={companyInfo.poBox}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, poBox: e.target.value })
                }
                className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-16"
              />
            </div>
          </div>

          {/* Tax / Phone / Email */}
          <div className="mt-3 text-xs text-slate-700 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            <span className="font-semibold text-gray-900 self-center">
              Tax No.:
            </span>
            <input
              type="text"
              value={companyInfo.taxNo}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, taxNo: e.target.value })
              }
              className={`${editable} font-medium`}
            />
            <span className="font-semibold text-gray-900 self-center">
              Phone:
            </span>
            <input
              type="text"
              value={companyInfo.phones}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, phones: e.target.value })
              }
              className={`${editable} font-medium`}
            />
            <span className="font-semibold text-gray-900 self-center">
              Email:
            </span>
            <input
              type="text"
              value={companyInfo.email}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, email: e.target.value })
              }
              className={`${editable} font-medium`}
            />
          </div>
        </div>

        {/* ── BILL TO + INVOICE META ───────────────────────────────────── */}
        <div className="border-b-2 border-slate-300 px-6 py-4 flex justify-between gap-8 bg-slate-50/50">
          {/* Bill To */}
          <div className="text-xs text-slate-700">
            <p className="font-bold text-sm text-gray-900 mb-2">Bill to</p>
            <input
              type="text"
              value={billTo.name}
              onChange={(e) => setBillTo({ ...billTo, name: e.target.value })}
              placeholder="Customer Name"
              className="bg-transparent border-b border-slate-400 focus:border-gray-600 focus:outline-none w-full mb-1"
            />
            <div className="flex items-center gap-1">
              <span>Phone:</span>
              <input
                type="text"
                value={billTo.phone}
                onChange={(e) =>
                  setBillTo({ ...billTo, phone: e.target.value })
                }
                placeholder="0500000000"
                className="bg-transparent border-b border-slate-400 focus:border-gray-600 focus:outline-none w-36"
              />
            </div>
          </div>

          {/* Invoice meta */}
          <div className="text-xs text-slate-700 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
            <span className="font-semibold text-gray-900 self-center">
              Invoice No.:
            </span>
            <input
              type="text"
              value={invoiceDetails.no}
              onChange={(e) =>
                setInvoiceDetails({ ...invoiceDetails, no: e.target.value })
              }
              className="bg-transparent border-b border-slate-400 focus:border-gray-600 focus:outline-none text-right font-medium"
            />

            <span className="font-semibold text-gray-900 self-center">
              Date:
            </span>
            <input
              type="date"
              value={invoiceDetails.date}
              onChange={(e) =>
                setInvoiceDetails({ ...invoiceDetails, date: e.target.value })
              }
              className="bg-transparent border-b border-slate-400 focus:border-gray-600 focus:outline-none text-right"
            />

            <span className="font-semibold text-gray-900 self-center">
              Due date:
            </span>
            <input
              type="date"
              value={invoiceDetails.dueDate}
              onChange={(e) =>
                setInvoiceDetails({
                  ...invoiceDetails,
                  dueDate: e.target.value,
                })
              }
              className="bg-transparent border-b border-slate-400 focus:border-gray-600 focus:outline-none text-right"
            />

            <span className="font-semibold text-gray-900 self-center">
              Payment status:
            </span>
            <input
              type="text"
              value={invoiceDetails.paymentStatus}
              onChange={(e) =>
                setInvoiceDetails({
                  ...invoiceDetails,
                  paymentStatus: e.target.value,
                })
              }
              className="bg-transparent border-b border-slate-400 focus:border-gray-600 focus:outline-none text-right"
            />
          </div>
        </div>

        {/* ── ITEMS TABLE ──────────────────────────────────────────────── */}
        <div className="px-6 py-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border border-gray-400">
                <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-700 w-8">
                  #
                </th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700">
                  Item
                </th>
                <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-700 w-16">
                  Quantity
                </th>
                <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-700 w-20">
                  Unit Price
                </th>
                <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-700 w-12">
                  Tax
                </th>
                <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-700 w-16">
                  Discount
                </th>
                <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-700 w-20">
                  Total
                </th>
                {/* Delete column — hidden in print via CSS */}
                <th
                  className="border border-gray-300 w-6 no-print"
                  aria-hidden
                />
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border border-gray-300">
                  <td className="border border-gray-300 px-2 py-2 text-center text-gray-600">
                    {item.sl}
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        updateItem(item.id, "name", e.target.value)
                      }
                      placeholder="Item Name"
                      className="w-full bg-transparent focus:outline-none focus:bg-amber-50 font-medium text-gray-800"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <input
                      type="number"
                      value={item.qty || ""}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "qty",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                      min="0"
                      className="w-full bg-transparent focus:outline-none focus:bg-amber-50 text-center font-medium"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <input
                      type="number"
                      value={item.unitPrice || ""}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "unitPrice",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                      min="0"
                      step="0.01"
                      className="w-full bg-transparent focus:outline-none focus:bg-amber-50 text-right font-medium"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">
                    {invoiceDetails.taxRate}%
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">
                    {item.discount}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-right text-gray-800 font-medium">
                    {fmt(item.total)}
                  </td>
                  {/* Delete button — hidden in print via CSS */}
                  <td className="border border-gray-300 px-1 py-2 text-center no-print">
                    {items.length > 1 && (
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 font-bold text-xs leading-none"
                        title="Remove"
                      >
                        ✕
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── TOTALS ───────────────────────────────────────────────────── */}
        <div className="px-6 pb-4 flex justify-end">
          <div className="w-64 text-xs border border-gray-300">
            <div className="flex justify-between px-3 py-2 border-b border-gray-200">
              <span className="font-semibold text-gray-700">Subtotal</span>
              <span className="font-semibold text-gray-900">
                SAR {fmt(subtotal)}
              </span>
            </div>
            <div className="flex justify-between items-center px-3 py-2 border-b border-gray-200">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-700">TAX</span>
                <span className="text-gray-500">(</span>
                <input
                  type="number"
                  value={invoiceDetails.taxRate}
                  onChange={(e) =>
                    setInvoiceDetails({
                      ...invoiceDetails,
                      taxRate: parseFloat(e.target.value) || 0,
                    })
                  }
                  min="0"
                  max="100"
                  step="0.1"
                  className="w-10 bg-transparent border-b border-gray-400 focus:border-gray-600 focus:outline-none text-center font-medium text-gray-900 no-print"
                />
                {/* Print-only static tax rate */}
                <span className="hidden print:inline font-medium text-gray-900">
                  {invoiceDetails.taxRate}
                </span>
                <span className="text-gray-500">%)</span>
              </div>
              <span className="font-semibold text-gray-900">
                SAR {fmt(tax)}
              </span>
            </div>
            <div className="flex justify-between px-3 py-2 bg-gray-50">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-gray-900">SAR {fmt(total)}</span>
            </div>
          </div>
        </div>

        {/* ── PAYMENT METHOD ───────────────────────────────────────────── */}
        <div className="px-6 pb-4 flex justify-end">
          <div className="w-64 text-xs border border-gray-300">
            {/* Header */}
            <div className="px-3 py-2 border-b border-gray-200">
              <p className="font-semibold text-gray-800">Payment method:</p>
            </div>

            {/* Cash */}
            <div className="flex justify-between items-center px-3 py-2 border-b border-gray-200">
              <span className="text-gray-700">
                Cash - <span dir="rtl">نقدي</span>
              </span>
              <div className="flex items-center gap-1">
                <span className="text-gray-500 text-[10px]">SAR</span>
                {/* Editable on screen */}
                <input
                  type="number"
                  value={cashPaid || ""}
                  onChange={(e) => setCashPaid(parseFloat(e.target.value) || 0)}
                  min="0"
                  step="0.01"
                  className="w-20 bg-transparent border-b border-gray-400 focus:border-gray-600 focus:outline-none text-right font-medium text-gray-800 no-print"
                />
                {/* Print only */}
                <span className="hidden print:inline font-medium text-gray-800">
                  {fmt(cashPaid)}
                </span>
              </div>
            </div>

            {/* Amount Due label */}
            <div className="flex justify-between px-3 py-2 border-b border-gray-200">
              <span className="text-gray-700">
                Amount Due -{" "}
                <span dir="rtl" className="text-gray-600">
                  المبلغ المستحق
                </span>
              </span>
              <span className="text-gray-800 font-medium">
                SAR {fmt(total)}
              </span>
            </div>

            {/* Paid amount */}
            <div className="flex justify-between px-3 py-2 border-b border-gray-200">
              <span className="font-semibold text-gray-800">Paid amount:</span>
              <span className="font-semibold text-gray-900">
                SAR {fmt(cashPaid)}
              </span>
            </div>

            {/* Amount due (remaining) */}
            <div className="flex justify-between px-3 py-2 bg-gray-50">
              <span className="font-bold text-gray-900">Amount due:</span>
              <span className="font-bold text-gray-900">
                SAR {fmt(amountDue)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
