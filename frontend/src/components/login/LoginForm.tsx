import type { FormEvent } from "react";

export const LoginForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });
  };

  return (
    <form
      className="flex flex-col items-center justify-center mt-20 gap-20"
      onSubmit={onSubmit}
    >
      <div className="flex gap-40 ">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          className="border-1 border-primary rounded-lg text-xl p-1 text-center w-52 font-semibold focus:outline-none focus:placeholder:text-transparent"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          className="border-1 border-primary rounded-lg text-xl p-1 text-center w-52 font-semibold focus:outline-none focus:placeholder:text-transparent"
        />
      </div>
      <button
        type="submit"
        className="bg-primary/80 text-extra rounded-lg py-2 px-4 transition-colors cursor-pointer hover:bg-primary"
      >
        Login
      </button>
    </form>
  );
};
