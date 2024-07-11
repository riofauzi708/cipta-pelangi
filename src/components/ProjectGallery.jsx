import React from 'react';
import '../assets/css/ProjectGallery.css';
import Project1 from '../assets/img/projek1.jpg';
import Project2 from '../assets/img/projek2.png';
import Project3 from '../assets/img/projek3.webp';
import Project4 from '../assets/img/projek4.webp';
import Project5 from '../assets/img/projek5.jpg';


const ProjectGallery = () => {
    // Anda bisa menambahkan state di sini jika diperlukan

    return (
        <div className="project-gallery">
            <h3>Galeri Proyek Kami</h3>
            <div className="gallery-container">
                {/* Item galeri */}
                <div className="gallery-item">
                    <img src={Project1} alt="Proyek 1" />
                    <p>Deskripsi Proyek 1</p>
                </div>
                {/* Tambahkan item galeri lainnya dengan format yang sama */}
                <div className="gallery-item">
                    <img src={Project2} alt="Proyek 2" />
                    <p>Deskripsi Proyek 2</p>
                </div>
                {/* ... */}
            </div>
        </div>
    );
};

export default ProjectGallery;
