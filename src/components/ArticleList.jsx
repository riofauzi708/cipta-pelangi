import React from 'react';
import '../assets/css/ArticleList.css';
import Image from '../assets/img/layanan.jpg';

const articles = [
    {
        title: "Inovasi Digital: Kunci Sukses Bisnis di Era Modern",
        content: "Di era digital saat ini, inovasi bukan lagi pilihan, melainkan kebutuhan. PT Cipta Pelangi telah memahami hal ini dengan menyediakan solusi digital yang tidak hanya mengikuti tren terkini, tetapi juga menciptakan tren baru. Dengan tim ahli yang berdedikasi, kami berkomitmen untuk membawa bisnis Anda ke tingkat berikutnya."
    },
    {
        title: "Mengapa Inovasi Digital Penting?",
        content: "Inovasi digital memungkinkan perusahaan untuk beradaptasi, bersaing, dan berkembang. Ini mencakup penggunaan teknologi baru untuk meningkatkan proses bisnis, menciptakan produk dan layanan baru, serta meningkatkan pengalaman pelanggan."
    },
    {
        title: "Transformasi Digital di Industri Manufaktur",
        content: "Industri manufaktur telah mengalami perubahan besar dengan adopsi teknologi digital. PT Cipta Pelangi membantu perusahaan manufaktur untuk mengoptimalkan proses produksi, meningkatkan efisiensi, dan mengurangi biaya melalui solusi digital inovatif."
    },
    {
        title: "Kasus Sukses",
        content: "Kami telah bekerja sama dengan berbagai perusahaan dari berbagai industri, membantu mereka tidak hanya bertahan, tetapi juga berkembang di pasar yang kompetitif. Kisah sukses klien kami adalah bukti nyata dari dampak positif inovasi digital."
    },
    {
        title: "Bergabunglah dengan Kami",
        content: "Jika Anda siap untuk mengubah bisnis Anda dan memimpin pasar, PT Cipta Pelangi adalah mitra yang Anda butuhkan. Hubungi kami hari ini untuk konsultasi gratis dan mulailah perjalanan Anda menuju kesuksesan digital."
    },
    {
        title: "Layanan Kami",
        content: "Di PT Cipta Pelangi, kami menawarkan berbagai layanan yang dirancang untuk memenuhi kebutuhan digital Anda: Pengembangan Aplikasi, Strategi Pemasaran Digital, Analisis Data Besar, dan banyak lagi. Kami berkomitmen untuk memberikan solusi terbaik yang dapat membantu bisnis Anda tumbuh dan berkembang."
    }
];

const ArticleList = () => {
    return (
        <div className="article-container">
            <div className="article-highlight">
                <div className="parallax">
                    <img src={Image} alt="Article" className="article-image" />
                </div>
                <h2>{articles[0].title}</h2>
                <p>{articles[0].content}</p>
            </div>
            <div className="article-bottom">
                {articles.slice(1, 3).map((article, index) => (
                    <div key={index} className="article-item">
                        <div className="parallax">
                            <img src={Image} alt="Article" className="article-image" />
                        </div>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
            <div className="article-right">
                {articles.slice(3).map((article, index) => (
                    <div key={index} className="article-item">
                        <div className="parallax">
                            <img src={Image} alt="Article" className="article-image" />
                        </div>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
