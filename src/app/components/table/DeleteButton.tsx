"use client";
import { deleteUser } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

type Props = {
  userId: string;
};

const DeleteButton = ({ userId }: Props) => {
    const router=useRouter()

  //butona tıklanınca
  const handleDelete = () => {
    deleteUser(userId)
      .then(() => {
        toast.success("Kullanıcı hesabı kaldırıldı");

         //sayfayı yenile apiden tekrar veri alınacak
        router.refresh()
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <button
        onClick={handleDelete}
        className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition text-red-500"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default DeleteButton;
