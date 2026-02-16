"use client";

import { useState } from "react";

// ─── Data Types ────────────────────────────────────────────────────────────────
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

// ─── Furniture SVG Icon ─────────────────────────────────────────────────────────
const FurnitureIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={120}
    height={120}
    x={0}
    y={0}
    viewBox="0 0 64 64"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style={{ enableBackground: "new 0 0 512 512" } as any}
    xmlSpace="preserve"
    className=""
  >
    <g>
      <g data-name="Layer 48">
        <path
          d="M29.37 55h-1.74A3.64 3.64 0 0 1 24 51.37V40.63A3.64 3.64 0 0 1 27.63 37h1.74a3.7 3.7 0 0 1 .87.11A3.61 3.61 0 0 1 33 40.63v10.74A3.64 3.64 0 0 1 29.37 55zm-1.74-16A1.63 1.63 0 0 0 26 40.63v10.74A1.63 1.63 0 0 0 27.63 53h1.74A1.63 1.63 0 0 0 31 51.37V40.63a1.63 1.63 0 0 0-1.24-1.58 1.81 1.81 0 0 0-.39 0zM57.37 55h-1.74A3.64 3.64 0 0 1 52 51.37V40.63a3.61 3.61 0 0 1 2.76-3.52 3.7 3.7 0 0 1 .87-.11h1.74A3.64 3.64 0 0 1 61 40.63v10.74A3.64 3.64 0 0 1 57.37 55zm-1.74-16a1.81 1.81 0 0 0-.39 0A1.63 1.63 0 0 0 54 40.63v10.74A1.63 1.63 0 0 0 55.63 53h1.74A1.63 1.63 0 0 0 59 51.37V40.63A1.63 1.63 0 0 0 57.37 39zM22 50H3V38h19zM5 48h15v-8H5z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="M20 48h2v7h-2zM3 48h2v7H3zM51 55H34a3 3 0 0 1-3-3v-6h23v6a3 3 0 0 1-3 3zm-18-7v4a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-4z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="M54 48H31v-3a5 5 0 0 1 5-5h13a5 5 0 0 1 5 5zm-21-2h19v-1a3 3 0 0 0-3-3H36a3 3 0 0 0-3 3z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="M54 45h-2a3 3 0 0 0-3-3H36a3 3 0 0 0-3 3h-2v-4.37a1.63 1.63 0 0 0-1.24-1.58l-.76-.18V31a7 7 0 0 1 7-7h13a7 7 0 0 1 7 7v7.87l-.76.18A1.63 1.63 0 0 0 54 40.63zm-18-5h13a5 5 0 0 1 3 1v-.37a3.6 3.6 0 0 1 2-3.24V31a5 5 0 0 0-5-5H36a5 5 0 0 0-5 5v6.39a3.6 3.6 0 0 1 2 3.24V41a5 5 0 0 1 3-1zM10 43h5v2h-5zM15.75 40h-6.5l-2.58-9h11.66zm-5-2h3.5l1.42-5H9.33z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="M12.5 33a3.92 3.92 0 0 1-.76-.08A8.1 8.1 0 0 1 5 25v-1h1a7.94 7.94 0 0 1 5.1 1.82l.37.29v.47A6.09 6.09 0 0 0 12.5 30a6.1 6.1 0 0 0 1.07-3.41v-.47l.37-.29A7.94 7.94 0 0 1 19 24h1v1a8.06 8.06 0 0 1-6.86 8 3.23 3.23 0 0 1-.64 0zm3.05-5.95a8 8 0 0 1-1 3.41 6 6 0 0 0 3.41-4.41 5.87 5.87 0 0 0-2.41 1.01zm-8.49-1a6.15 6.15 0 0 0 3.41 4.41 8.09 8.09 0 0 1-1-3.41 5.87 5.87 0 0 0-2.41-.99z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="m12.5 32.91-.71-.7c-.17-.18-.34-.36-.5-.55a8.09 8.09 0 0 1 .5-10.87l.71-.7.71.7a8 8 0 0 1 2.36 5.71v.05a8 8 0 0 1-1.84 5.08c-.18.22-.35.4-.52.58zm0-9.86a6.1 6.1 0 0 0 0 6.9 6.1 6.1 0 0 0 1.07-3.41h1-1a6 6 0 0 0-1.07-3.49zM24 20h2v24h-2z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="M33.1 22H16.9l1.19-13h13.82zm-14-2h11.8l-.81-9H19.91z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
      </g>
    </g>
  </svg>
);

// ─── Main Invoice Component ───────────────────────────────────────────────────
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

  const [billTo, setBillTo] = useState({
    name: "",
    phone: "",
  });

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

  const [payment] = useState({
    cash: 0,
    amountDue: 0,
    paid: 0,
    due: 0,
  });

  const [notesAr1, setNotesAr1] = useState(
    "شهور 3 بعد البضاعة عن مسؤول غير المحل",
  );
  const [notesAr2, setNotesAr2] = useState(
    "الفاتورة كامل سداد قبل البضاعة بأخذ لايسمح المحل",
  );

  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const addItem = () => {
    const newSl = items.length + 1;
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      sl: newSl,
      name: "",
      qty: 1,
      unitPrice: 0,
      tax: `${invoiceDetails.taxRate}%`,
      discount: "0.00%",
      total: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      const updatedItems = items
        .filter((item) => item.id !== id)
        .map((item, index) => ({ ...item, sl: index + 1 }));
      setItems(updatedItems);
    }
  };

  const updateItem = (
    id: string,
    field: keyof InvoiceItem,
    value: string | number,
  ) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === "qty" || field === "unitPrice") {
          const qty = Number(updatedItem.qty);
          const price = Number(updatedItem.unitPrice);
          updatedItem.total = qty * price;
        }
        return updatedItem;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const taxRate = invoiceDetails.taxRate / 100;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4 font-sans">
      {/* Buttons */}
      <div className="mb-4 flex gap-2 no-print">
        <button
          onClick={handlePrint}
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

      {/* Invoice Page */}
      <div className="bg-white w-full max-w-3xl shadow-2xl print:shadow-none">
        {/* Header with Accent Color */}
        <div className="border-b-2 border-gray-900 p-6">
          <div className="flex items-start justify-between">
            {/* Left: Arabic info */}
            <div className="w-8/12 text-left flex-1" dir="rtl">
              <input
                type="text"
                value="فاتورة ضريبية مبسطة-SIMPLIFIED TAX INVOICE"
                readOnly
                className="text-xl font-extrabold text-gray-900 leading-tight bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full text-left"
              />
              <input
                type="text"
                value={`${companyInfo.nameAr} - ${companyInfo.nameEn}`}
                onChange={(e) => {
                  const parts = e.target.value.split(" - ");
                  setCompanyInfo({
                    ...companyInfo,
                    nameAr: parts[0] || "",
                    nameEn: parts[1] || "",
                  });
                }}
                className="text-base font-bold text-slate-800 mt-1 bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full text-left"
              />
              <div className="mt-2 text-xs text-slate-700 leading-5">
                <input
                  type="text"
                  value={companyInfo.addressAr}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
                      addressAr: e.target.value,
                    })
                  }
                  className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full mb-1 text-left"
                />
                <input
                  type="text"
                  value={companyInfo.crAr}
                  onChange={(e) =>
                    setCompanyInfo({ ...companyInfo, crAr: e.target.value })
                  }
                  className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full mb-1 text-left"
                />
                <input
                  type="text"
                  value={companyInfo.poBoxAr}
                  onChange={(e) =>
                    setCompanyInfo({ ...companyInfo, poBoxAr: e.target.value })
                  }
                  className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full text-left"
                />
              </div>
            </div>

            {/* Right: Logo */}
            <div className="w-4/12 flex justify-end">
              <div className="border-2 border-gray-900 p-2 mr-4 bg-white shadow-md">
                <FurnitureIcon />
              </div>
            </div>
          </div>

          {/* English address block */}
          <div className="mt-4 text-xs text-slate-700 leading-5">
            <input
              type="text"
              value={companyInfo.addressEn}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, addressEn: e.target.value })
              }
              className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full mb-1"
            />
            <div className="flex gap-4">
              <span className="font-semibold text-slate-800">C.R </span>
              <input
                type="text"
                value={companyInfo.cr}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, cr: e.target.value })
                }
                className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-24"
              />
              <span className="font-semibold text-slate-800">P.O.Box: </span>
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
          <div className="mt-3 text-xs text-slate-700 grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5">
            <span className="font-semibold text-gray-900">Tax No.:</span>
            <input
              type="text"
              value={companyInfo.taxNo}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, taxNo: e.target.value })
              }
              className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full font-medium"
            />
            <span className="font-semibold text-gray-900">Phone:</span>
            <input
              type="text"
              value={companyInfo.phones}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, phones: e.target.value })
              }
              className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full font-medium"
            />
            <span className="font-semibold text-gray-900">Email:</span>
            <input
              type="text"
              value={companyInfo.email}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, email: e.target.value })
              }
              className="bg-transparent border-b border-dashed border-gray-300 focus:border-gray-600 focus:outline-none w-full font-medium"
            />
          </div>
        </div>

        {/* Bill To + Invoice Meta */}
        <div className="border-b-2 border-slate-300 px-6 py-4 flex justify-between gap-8 bg-slate-50/50">
          {/* Bill To */}
          <div className="text-xs text-slate-700">
            <p className="font-bold text-sm text-gray-900 mb-1">Bill to</p>
            <input
              type="text"
              value={billTo.name}
              onChange={(e) => setBillTo({ ...billTo, name: e.target.value })}
              placeholder="Customer Name"
              className="bg-transparent border-b border-slate-400 focus:border-gray-600 focus:outline-none w-full mb-1"
            />
            <div>
              Phone:{" "}
              <input
                type="text"
                value={billTo.phone}
                onChange={(e) =>
                  setBillTo({ ...billTo, phone: e.target.value })
                }
                placeholder="Phone Number"
                className="bg-transparent border-b border-slate-400 focus:border-gray-600 focus:outline-none w-32"
              />
            </div>
          </div>

          {/* Invoice details */}
          <div className="text-xs text-slate-700 grid grid-cols-[auto_1fr] gap-x-6 gap-y-0.5 text-right">
            <span className="font-semibold text-left text-gray-900">
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
            <span className="font-semibold text-left text-gray-900">Date:</span>
            <input
              type="date"
              value={invoiceDetails.date}
              onChange={(e) =>
                setInvoiceDetails({ ...invoiceDetails, date: e.target.value })
              }
              className="bg-transparent border-b border-slate-400 focus:border-gray-600 focus:outline-none text-right"
            />
            <span className="font-semibold text-left text-gray-900">
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
            <span className="font-semibold text-left text-gray-900">
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

        {/* Items Table */}
        <div className="px-6 py-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-white text-gray-900">
                <th className="border border-gray-800 px-2 py-2 text-center font-bold w-8">
                  #
                </th>
                <th className="border border-gray-800 px-3 py-2 text-center font-bold">
                  Item
                </th>
                <th className="border border-gray-800 px-2 py-2 text-center font-bold">
                  Quantity
                </th>
                <th className="border border-gray-800 px-2 py-2 text-center font-bold">
                  Unit Price
                </th>
                <th className="border border-gray-800 px-2 py-2 text-center font-bold">
                  Tax
                </th>
                <th className="border border-gray-800 px-2 py-2 text-center font-bold">
                  Discount
                </th>
                <th className="border border-gray-800 px-2 py-2 text-center font-bold">
                  Total
                </th>
                <th className="py-2 px-1 w-6 text-center no-print"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="border border-slate-400 even:bg-slate-50"
                >
                  <td className="border border-slate-300 px-2 py-2 text-center text-slate-600 font-medium">
                    {item.sl}
                  </td>
                  <td className="border border-slate-300 px-3 py-2">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        updateItem(item.id, "name", e.target.value)
                      }
                      placeholder="Item Name"
                      className="w-full bg-transparent focus:outline-none focus:bg-amber-100 font-medium text-slate-800"
                    />
                  </td>
                  <td className="border border-slate-300 px-2 py-2">
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
                      className="w-full bg-transparent focus:outline-none focus:bg-amber-100 text-center font-medium"
                      min="0"
                    />
                  </td>
                  <td className="border border-slate-300 px-2 py-2">
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
                      className="w-full bg-transparent focus:outline-none focus:bg-amber-100 text-right font-medium"
                      min="0"
                      step="0.01"
                    />
                  </td>
                  <td className="border border-slate-300 px-2 py-2 text-center text-slate-700">
                    {invoiceDetails.taxRate}%
                  </td>
                  <td className="border border-slate-300 px-2 py-2 text-center text-slate-700">
                    {item.discount}
                  </td>
                  <td className="border border-slate-300 px-2 py-2 text-right text-gray-900 font-bold">
                    {fmt(item.total)}
                  </td>
                  <td className="py-2 px-1 text-center no-print">
                    <button
                      onClick={() => removeItem(item.id)}
                      disabled={items.length === 1}
                      className={`text-red-600 hover:text-red-800 font-bold disabled:text-gray-300 disabled:cursor-not-allowed text-xs ${
                        items.length === 1 ? "hidden" : ""
                      }`}
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="px-6 pb-4 flex justify-end">
          <div className="w-64 text-xs border-2 border-gray-900">
            <div className="flex justify-between px-3 py-2 border-b border-slate-300 bg-slate-50">
              <span className="font-semibold text-slate-700">Subtotal</span>
              <span className="font-semibold text-slate-900">
                SAR {fmt(subtotal)}
              </span>
            </div>
            <div className="flex justify-between px-3 py-2 border-b border-slate-300 bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">TAX</span>
                <span className="text-slate-500">(</span>
                <input
                  type="number"
                  value={invoiceDetails.taxRate}
                  onChange={(e) =>
                    setInvoiceDetails({
                      ...invoiceDetails,
                      taxRate: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="w-12 bg-transparent border-b border-gray-400 focus:border-gray-600 focus:outline-none text-center font-medium text-gray-900"
                  min="0"
                  max="100"
                  step="0.1"
                />
                <span className="text-slate-500">%)</span>
              </div>
              <span className="font-semibold text-slate-900">
                SAR {fmt(tax)}
              </span>
            </div>
            <div className="flex justify-between px-3 py-2 bg-white">
              <span className="font-bold text-white">Total</span>
              <span className="font-bold text-white">SAR {fmt(total)}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="px-6 pb-4 flex justify-end">
          <div className="w-64 text-xs border-2 border-slate-400">
            <div className="px-3 py-2 border-b border-slate-300 bg-slate-50">
              <p className="font-semibold text-slate-800 mb-1">
                Payment method:
              </p>
            </div>
            <div className="flex justify-between px-3 py-2 border-b border-slate-200">
              <span className="text-slate-700">
                Cash - <span dir="rtl">نقدي</span>
              </span>
              <span className="text-slate-900 font-medium">
                SAR {fmt(payment.cash)}
              </span>
            </div>
            <div className="flex justify-between px-3 py-2 border-b border-slate-200">
              <span className="text-slate-700">
                Amount Due -{" "}
                <span dir="rtl" className="text-slate-600">
                  المبلغ المستحق
                </span>
              </span>
              <span className="text-slate-900 font-medium">
                SAR {fmt(payment.amountDue)}
              </span>
            </div>
            <div className="flex justify-between px-3 py-2 border-b border-slate-200">
              <span className="font-semibold text-slate-800">Paid amount:</span>
              <span className="font-semibold text-gray-900">
                SAR {fmt(payment.paid)}
              </span>
            </div>
            <div className="flex justify-between px-3 py-2 bg-gray-100">
              <span className="font-bold text-gray-900">Amount due:</span>
              <span className="font-bold text-gray-900">
                SAR {fmt(payment.due)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0mm;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          body {
            background: white !important;
          }

          .no-print {
            display: none !important;
          }

          input {
            border: none !important;
            background: transparent !important;
          }

          input:focus {
            outline: none !important;
          }

          /* Ensure table borders are visible */
          table {
            border-collapse: collapse !important;
          }

          table td,
          table th {
            border: 1px solid #000 !important;
            padding: 2px 4px !important;
          }

          #invoice-content {
            box-shadow: none !important;
          }

          .bg-white {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
