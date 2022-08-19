import React from 'react';
import UserCard from '../components/admin/UserCard.component';
import Comments from '../components/admin/Comments.component';
import Booking from '../components/admin/Booking.component';

const AdminPage = () => {
  return (
    <>
      <UserCard />

      <section className="flex gap-5 h-[500px] p-5">
        <Comments />

        <Booking />
      </section>
    </>
  );
}

export default AdminPage;
