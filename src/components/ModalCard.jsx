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

            <style jsx>{`
                .modal {
                    display: none;
                    position: fixed;
                    z-index: 1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    background-color: rgba(0, 0, 0, 0.4);
                }

                .modal-content {
                    background-color: #fefefe;
                    margin: 15% auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                }

                .close {
                    color: #aaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                    cursor: pointer;
                }

                @media only screen and (max-width: 600px) {
                    .modal-content {
                        width: 90%;
                    }
                }

                @media only screen and (min-width: 1200px) {
                    .modal-content {
                        width: 60%;
                    }
                }
            `}</style>
        </div>
    );
};

export default ModalCard;
