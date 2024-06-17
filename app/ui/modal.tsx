import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function ButtonModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                type="submit"
                onPress={onOpen}
                radius="full"
                className="bg-primary w:1/12 sm:w-1/6 items-center px-5 py-2.5 mt-4 text-sm font-medium text-center text-white focus:ring-4 focus:ring-primary-200 border-[#436850]"
            >
                    Laporkan
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Terimakasih Telah Melapor !
                            </ModalHeader>
                            <ModalBody>
                                <Icon icon="icon-park-solid:success" className="mx-auto text-primary" width="150" height="150" />
                                <p>
                                Laporan anda  segera kami proses dalam 1 x 24 jam mohon menunggu petugas datang ke lokasi
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button radius="full" color="danger" variant="light" onPress={onClose}>
                                    Tutup
                                </Button>
                                <Link href="/home/laporan">
                                    <Button radius="full" color="primary" variant="solid">
                                        Lihat Laporan
                                    </Button>
                                </Link>
                                {/* <Button onPress={onClose} variant="solid" color="primary" radius="full">
                                    <Icon icon="gravity-ui:arrow-right" className="text-white font-semibold text-xl" />
                                </Button> */}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
