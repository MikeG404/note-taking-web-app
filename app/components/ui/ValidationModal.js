import styles from './validation-modal.module.css';
import { Trash, Archive } from "../assets/svg";

export default function ValidationModal({
    type = 'delete',
    onCancel,
    onConfirm,
    title,
    message
}) {

    const config = {
        delete: {
            icon: <Trash width={24} height={24} />,
            title: 'Delete Note',
            message: 'Are you sure you want to permanently delete this note? This action cannot be undone.',
            confirmText: 'Delete Note',
            confirmClass: styles.deleteButton
        },
        archive: {
            icon: <Archive width={24} height={24} />,
            title: 'Archive Note',
            message: 'Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.',
            confirmText: 'Archive Note',
            confirmClass: styles.archiveButton
        }
    };

    const currentConfig = config[type];

    return (
        <div className={styles.validationModal}>
            <div className={styles.validationModalContainer}>
                <div className={styles.validationModalContent}>
                    <div className={styles.validationModalIcon}>
                        {currentConfig.icon}
                    </div>
                    <div className={styles.validationModalText}>
                        <h3 className='text-preset-2'>{title || currentConfig.title}</h3>
                        <p className='text-preset-5'>{message || currentConfig.message}</p>
                    </div>
                </div>
                <div className={styles.validationModalButtons}>
                    <button onClick={onCancel} className={styles.cancelButton}>Cancel</button>
                    <button onClick={onConfirm} className={currentConfig.confirmClass}>
                        {currentConfig.confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
}
