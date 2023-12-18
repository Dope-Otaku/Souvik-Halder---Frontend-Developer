import React, { useState } from 'react';

const ModalCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div>ModalCard</div>
            <button onClick={openModal}>Read More</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <p>Modal content goes here...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalCard;
