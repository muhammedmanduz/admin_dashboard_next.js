import UsersTable from "@/app/components/table/UsersTable";
import React from "react";
import Modal from "./Modal";



type Props = {
  searchParams: Promise<{ show?: string }>;
};

const Users = async ({ searchParams }: Props) => {
  const { show } = await searchParams;
  
  console.log(show);
  return (
    <div>
      <h1 className="title">Kullanıcılar</h1>

      <UsersTable />
      {/* {eğer url de show parametresi varsa ekrana modal bas} */}
      {show && <Modal id={show} />}
    </div>
  );
};

export default Users;
