export default Modal;
declare function Modal({ isOpen, onClose, title, content, icon, buttonLabel, style, }: {
    isOpen: any;
    onClose: any;
    title?: string;
    content?: string;
    icon: any;
    buttonLabel?: string;
    style?: {};
}): JSX.Element;
