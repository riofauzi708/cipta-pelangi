import React, { useState } from 'react';
import '../assets/css/FAQSection.css'

const FAQSection = () => {
    // State untuk mengelola FAQ yang terbuka
    const [activeIndex, setActiveIndex] = useState(null);

    // Data FAQ
    const faqs = [
        {
            question: "Bagaimana cara memulai proyek dengan PT Cipta Pelangi?",
            answer: "Anda bisa menghubungi kami melalui email, WhatsApp, atau telepon untuk konsultasi awal."
        },
        // ... tambahkan FAQ lainnya ...
    ];

    // Fungsi untuk mengubah FAQ yang aktif
    const toggleFAQ = index => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-section">
            <h3>Pertanyaan yang Sering Diajukan</h3>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${index === activeIndex ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                        </div>
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
