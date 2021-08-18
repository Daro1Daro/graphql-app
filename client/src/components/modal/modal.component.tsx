import { FunctionComponent, useEffect } from 'react';
import { createPortal } from "react-dom";

import './modal.styles.scss';

export interface ModalProps {
    isOpen: boolean;
    modalContent: JSX.Element;
    headerText: string;
}

const Modal: FunctionComponent<ModalProps> = ({ isOpen, modalContent, headerText }) => {
    const modalRoot: HTMLElement = document.getElementById('root-modal') as HTMLElement;
    const container: HTMLDivElement = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(container);
    }, [container, modalRoot]);

    useEffect(() => {
        return () => {
            modalRoot.removeChild(container)
        };
    });

    const modal = (
        <div className={'modal'}>
            <div className={'backdrop'} />
            <div className={'wrapper'}>
                <div className={'container'}>
                    <div className={'header'}>
                        <div className={'header-text'}>{headerText}</div>
                    </div>
                    <div className={'content'}>{modalContent}</div>
                </div>
            </div>
        </div>
    );

    return isOpen ? createPortal(modal, container) : null;
};

export default Modal;