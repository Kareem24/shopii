import ProfileLayout from '@/layouts/ProfileLayout';

function Profile() {
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-2 px-6 pb-32 pt-16 md:gap-8 md:divide-x md:px-20">
      <ProfileLayout />
    </div>
  );
}

export default Profile;
