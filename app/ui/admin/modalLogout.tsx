import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Icon} from "@iconify/react";


interface ModalLogoutProps {
    textColor?: string;
    bgColor?: string;
    width?: string;
    children?: React.ReactNode;
}

export default function ModalLogout({ textColor, children, bgColor, width }: ModalLogoutProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const logout = () => {
        window.location.href = "/";
    };

    return (
        <>
            <Button onPress={onOpen} className={`flex items-center text-${textColor} bg-${bgColor} w-${width}`}>
                {children}
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 bg-primary text-white">Keluar</ModalHeader>
                            <ModalBody className="flex flex-col items-center">
                                <Icon icon="majesticons:door-enter" className="text-primary text-center text-[200px]" />
                                <p>
                                    Apa anda yakini ingin keluar dari aplikasi?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Batal
                                </Button>
                                <Button color="primary" onPress={logout}>
                                    Ya
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}