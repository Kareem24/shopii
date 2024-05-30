import ResetForm from '@/components/ResetForm';

function ResetPassword() {
  return (
    <div className="px-6 py-40  md:px-20">
      <ResetForm
        btnName={'Send Reset Link'}
        className={' m-auto  mt-6'}
        btnClass={'w-full'}
      />
    </div>
  );
}

export default ResetPassword;
