// Testimonials.jsx
import React from 'react';
import '../assets/css/Testimonial.css';

const Testimonials = () => {
    // Data testimoni bisa disimpan dalam state atau datang dari props
    const testimonials = [
        {
            quote: "Layanan PT Cipta Pelangi benar-benar mengubah cara kami berbisnis. Sangat direkomendasikan!",
            name: "Andi Sunandi",
            position: "CEO Sunan Group",
            // avatar: avatarAndi, // Jika Anda memiliki gambar/avatar pelanggan
        },
        // ... tambahkan testimoni lainnya ...
    ];

    return (
        <div className="testimonials-section">
            <h3>Apa Kata Mereka Tentang Kami</h3>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        {/* <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" /> */}
                        <blockquote>{testimonial.quote}</blockquote>
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-position">{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
