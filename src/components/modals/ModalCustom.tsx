'use client';
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '../ui/dialog';

export interface ModalCustomProps {
    /** Tiêu đề hiển thị ở phần header */
    title?: React.ReactNode;
    /** Nội dung chính của modal (thân) */
    content?: React.ReactNode;
    /** Mô tả ngắn bên dưới tiêu đề */
    description?: React.ReactNode;
    /** Footer tuỳ chỉnh (ví dụ: các nút hành động) */
    footer?: React.ReactNode;
    /** Phần tử trigger để mở modal (được wrap bằng DialogTrigger asChild) */
    trigger?: React.ReactNode;
    /** Controlled open state */
    open?: boolean;
    /** Uncontrolled: giá trị mở mặc định */
    defaultOpen?: boolean;
    /** Callback khi trạng thái mở thay đổi */
    onOpenChange?: (open: boolean) => void;
    /** Ẩn/hiện nút close mặc định */
    showCloseButton?: boolean;
    /** Class cho phần Content (DialogContent) */
    className?: string;
    /** Class cho phần Header */
    headerClassName?: string;
    /** Class cho phần Footer */
    footerClassName?: string;
    /** Chặn đóng khi click ra ngoài */
    disableOutsideClose?: boolean;
}

/**
 * ModalCustom: Modal tái sử dụng nhanh chỉ cần truyền title & content.
 * Cho phép dùng controlled hoặc uncontrolled, hỗ trợ trigger, description, footer.
 */
const ModalCustom: React.FC<ModalCustomProps> = ({
    title,
    content,
    description,
    footer,
    trigger,
    open,
    defaultOpen,
    onOpenChange,
    showCloseButton = true,
    className,
    headerClassName,
    footerClassName,
    disableOutsideClose = false,
}) => {
    const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen ?? false);
    const isControlled = open !== undefined;

    const handleOpenChange = (next: boolean) => {
        if (!isControlled) {
            setInternalOpen(next);
        }
        onOpenChange?.(next);
    };

    return (
        <Dialog open={isControlled ? open : internalOpen} onOpenChange={handleOpenChange}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent
                showCloseButton={showCloseButton}
                className={className}
                onInteractOutside={(e) => {
                    if (disableOutsideClose) e.preventDefault();
                }}
            >
                {(title || description) && (
                    <DialogHeader className={headerClassName}>
                        {title && <DialogTitle>{title}</DialogTitle>}
                        {description && <DialogDescription>{description}</DialogDescription>}
                    </DialogHeader>
                )}
                {content}
                {footer && <DialogFooter className={footerClassName}>{footer}</DialogFooter>}
            </DialogContent>
        </Dialog>
    );
};

export default ModalCustom;
