import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import FormEdit from "./formEdit";

export default function ModalEdit() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" className="w-44">
        Edit
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={() => alert("submitted")}>
              <ModalHeader className="flex flex-col gap-1 bg-primary text-white">
                Edit Profil
              </ModalHeader>

              <ModalBody>
                <div className="flex gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nik">NIK</label>
                    <Input
                      type="text"
                      name="nik"
                      id="nik"
                      placeholder="Masukkan NIK"
                    />

                    <label htmlFor="name">Nama</label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Masukkan Nama Lengkap"
                    />

                    <label htmlFor="telephone">Telepon</label>
                    <Input
                      type="telephone"
                      name="telephone"
                      id="telephone"
                      placeholder="Masukkan Nomor Telepon"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="username">Username</label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Masukkan Username"
                    />

                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Masukkan Password"
                    />
                  </div>

                </div>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button type="submit" className="bg-primary text-white">
                  Simpan
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
