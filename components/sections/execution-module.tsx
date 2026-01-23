"use client";

import React, { useState } from 'react';
import {
    Terminal,
    Zap,
    Mail,
    User,
    ShieldCheck,
    Loader2,
    CheckCircle2,
    ArrowRight,
    Briefcase,
    Globe,
    Printer,
    Download
} from 'lucide-react';

/**
 * AI COMMANDER EXECUTION MODULE - FINAL V4
 * Purpose: Professional Invoice Generator Live Demo
 */
export function ExecutionModule({ embedded = false }: { embedded?: boolean }) {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        clientName: '',
        clientEmail: '',
        itemDescription: 'AI Automation Strategy & System Implementation',
        amount: 5500,
        invoiceNo: `INV-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-GB')
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleExecute = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.clientEmail || !formData.clientName) return;
        setLoading(true);
        setStep(2);
        await new Promise(resolve => setTimeout(resolve, 2800));
        setLoading(false);
        setStep(3);
    };

    const resetForm = () => {
        setStep(1);
        setFormData(prev => ({
            ...prev,
            invoiceNo: `INV-${Math.floor(100000 + Math.random() * 900000)}`
        }));
    };

    return (
        <>
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        visibility: hidden;
                        background: white;
                    }
                    /* Hide everything by default */
                    body * {
                        visibility: hidden;
                    }
                    /* Only show the invoice container and its children */
                    .print-invoice, .print-invoice * {
                        visibility: visible;
                    }
                    /* Position the invoice absolutely to top, forced A4 width */
                    .print-invoice {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 210mm !important;
                        min-height: 297mm !important;
                        margin: 0 !important;
                        padding: 40px !important;
                        background: white !important;
                        z-index: 9999;
                        border: none !important;
                        box-shadow: none !important;
                        border-radius: 0 !important;
                        overflow: visible !important;
                    }
                    /* Hide non-printable elements inside the component if any */
                    .no-print {
                        display: none !important;
                    }
                }
            `}</style>
            <div className={`w-full ${embedded ? 'min-h-full' : 'py-20 px-4 bg-[#0A0A0A]'} font-sans selection:bg-yellow-500 selection:text-black`}>
                <div className={`mx-auto border border-white/10 bg-black/40 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${embedded ? 'w-full h-full rounded-none border-none bg-black/80' : 'max-w-4xl'}`}>

                    {/* Top Control Bar */}
                    <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center justify-between text-[10px] font-mono">
                        <div className="flex items-center gap-3">
                            <Terminal size={14} className="text-yellow-500" />
                            <span className="uppercase tracking-[0.2em] text-white/40">Live Protocol: Asset_Generator_v4</span>
                        </div>
                        <div className="text-yellow-500/80 animate-pulse">● AGENT_READY</div>
                    </div>

                    <div className="p-6 md:p-12">
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <header className="mb-10">
                                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-2 text-white">
                                        INVOICE <span className="text-yellow-500">GENERATOR</span>
                                    </h2>
                                    <p className="text-white/40 text-sm font-medium border-l-2 border-yellow-500/30 pl-4 max-w-lg">
                                        Execute autonomous business tasks. Assemble a corporate invoice in 0.4s.
                                    </p>
                                </header>

                                <form onSubmit={handleExecute} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/30 mb-2">Recipient Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-yellow-500 transition-colors" size={18} />
                                                <input required name="clientName" value={formData.clientName} onChange={handleChange} placeholder="e.g. Acme Corporation" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-yellow-500/50 text-white transition-all" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/30 mb-2">Target Email</label>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-yellow-500 transition-colors" size={18} />
                                                <input required type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange} placeholder="billing@client.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-yellow-500/50 text-white transition-all" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/30 mb-2">Description</label>
                                            <div className="relative group">
                                                <Briefcase className="absolute left-4 top-4 text-white/20 group-focus-within:text-yellow-500 transition-colors" size={18} />
                                                <textarea required name="itemDescription" value={formData.itemDescription} onChange={handleChange} rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-yellow-500/50 text-white resize-none text-sm transition-all" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/30 mb-2">Amount (RM)</label>
                                            <div className="relative mb-6">
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20 font-black text-2xl italic">RM</span>
                                                <input required type="number" name="amount" value={formData.amount} onChange={handleChange} className="w-full bg-transparent border-none p-0 pl-12 outline-none text-white text-5xl font-black italic font-mono tracking-tighter" />
                                            </div>
                                            <div className="space-y-2 pt-6 border-t border-white/5 text-[10px] font-mono uppercase">
                                                <div className="flex justify-between"><span className="text-white/20">Serial</span><span className="text-white">{formData.invoiceNo}</span></div>
                                                <div className="flex justify-between"><span className="text-white/20">Issued</span><span className="text-white">{formData.date}</span></div>
                                            </div>
                                        </div>

                                        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-5 rounded-xl font-black italic uppercase tracking-tighter text-xl transition-all active:scale-[0.98] shadow-xl flex items-center justify-center gap-3">
                                            <span>Execute Distribution</span>
                                            <Zap size={22} fill="currentColor" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="py-24 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                                <Loader2 className="animate-spin text-yellow-500 mb-8" size={70} strokeWidth={1} />
                                <h3 className="text-2xl font-black italic uppercase text-white tracking-tight">Generating Asset</h3>
                                <p className="text-white/20 font-mono text-[10px] tracking-[0.3em] uppercase">Encrypting_Gateway // Rendering_PDF</p>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="animate-in slide-in-from-top-4 duration-700">
                                <div className="flex flex-col md:flex-row items-center justify-between bg-green-500/10 border border-green-500/20 p-4 rounded-xl mb-8 gap-4 no-print">
                                    <div className="flex items-center gap-3 text-green-500">
                                        <CheckCircle2 size={24} />
                                        <div>
                                            <span className="block text-xs font-black uppercase tracking-widest">Execution Successful</span>
                                            <span className="block text-[10px] opacity-60 font-mono">Distributed to: {formData.clientEmail}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={resetForm} className="text-[10px] font-mono uppercase bg-white/5 px-4 py-2 rounded border border-white/10 hover:bg-white/10">New Invoice</button>
                                        <button onClick={() => window.print()} className="text-[10px] font-mono uppercase bg-yellow-500 text-black px-4 py-2 rounded font-black">Print Asset</button>
                                    </div>
                                </div>

                                {/* Invoice Preview */}
                                <div className="bg-white text-black p-8 md:p-14 rounded-sm shadow-2xl max-w-3xl mx-auto overflow-hidden print-invoice">
                                    <div className="flex justify-between mb-16">
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Zap className="text-yellow-500" size={24} fill="black" />
                                                <span className="font-black italic text-2xl uppercase">AI Commander Labs</span>
                                            </div>
                                            <p className="text-[11px] leading-tight text-gray-500 uppercase font-medium">Level 35, Mercu Cyberjaya, 63000, MY</p>
                                        </div>
                                        <div className="text-right">
                                            <h1 className="text-5xl font-black uppercase italic text-gray-100 mb-4">Invoice</h1>
                                            <p className="text-[10px] uppercase font-bold text-gray-400">No. {formData.invoiceNo}</p>
                                            <p className="text-sm font-bold">{formData.date}</p>
                                        </div>
                                    </div>

                                    <div className="mb-16">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-2 tracking-widest">Bill To</p>
                                        <p className="font-black uppercase text-2xl leading-none mb-1">{formData.clientName}</p>
                                        <p className="text-xs text-gray-500 underline">{formData.clientEmail}</p>
                                    </div>

                                    <table className="w-full mb-12 border-t-2 border-black">
                                        <thead>
                                            <tr className="text-[10px] uppercase font-black text-left border-b border-gray-100">
                                                <th className="py-5">Description</th>
                                                <th className="py-5 text-right">Total (RM)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm font-bold">
                                            <tr>
                                                <td className="py-8 pr-4 border-b border-gray-50 uppercase">{formData.itemDescription}</td>
                                                <td className="py-8 text-right font-mono font-black border-b border-gray-50">{(typeof formData.amount === 'string' ? parseFloat(formData.amount) : formData.amount).toLocaleString('en-MY', { minimumFractionDigits: 2 })}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="flex justify-end pt-4 border-t-4 border-black">
                                        <div className="text-right">
                                            <span className="text-[10px] font-black uppercase tracking-widest mr-4">Total Due</span>
                                            <span className="text-2xl font-black font-mono tracking-tighter text-yellow-500">RM {(typeof formData.amount === 'string' ? parseFloat(formData.amount) : formData.amount).toLocaleString('en-MY', { minimumFractionDigits: 2 })}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
