const Signup = () => {
  return (
    <div class='flex flex-col items-center justify-center h-screen'>
      <p>Welcome to <span>wired</span>.</p>
      <form action="" class="grid grid-cols-1 gap-4 w-1/4">
        <input type="text" placeholder="Name" class="border p-1" />
        <input type="text" placeholder="Email" class="border p-1" />
        <input type="text" placeholder="Password" class="border p-1" />
      </form>
    </div>
  );
};

export default Signup;
