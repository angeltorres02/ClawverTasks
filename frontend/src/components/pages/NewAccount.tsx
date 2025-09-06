import type { FormEvent } from "react";
import { LogoImage } from "../login";

export default function NewAccount() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const displayName = formData.get("display-name");
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ email, displayName, username, password });
  };

  return (
    <div className="flex flex-col items-start justify-center font-nunito">
      <div className="grid grid-cols-3 items-center mb-4 w-full px-8 pt-4">
        <LogoImage />
        <h1 className="text-4xl font-semibold text-center col-span-1">
          Tell us about you
        </h1>
        <div></div>
      </div>
      <form
        className="flex flex-col justify-center items-center w-full gap-12"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="newAccountEmail">Email</label>
          <input
            required
            type="email"
            name="email"
            id="newAccountEmail"
            className="border-1 border-primary rounded-lg text-xl p-1 font-semibold focus:outline-none w-120 px-4 py-2 "
          />
        </div>
        <div className="flex flex-col w-120 gap-2">
          <label htmlFor="newAccountName">Display Name</label>
          <input
            required
            type="text"
            name="display-name"
            id="newAccountName"
            className="border-1 border-primary rounded-lg text-xl p-1 font-semibold focus:outline-none w-120 px-4 py-2 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newAccountUsername">Username</label>
          <input
            required
            type="text"
            name="username"
            id="newAccountUsername"
            className="border-1 border-primary rounded-lg text-xl p-1 font-semibold focus:outline-none w-120 px-4 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newAccountPassword">Password</label>
          <input
            required
            type="password"
            name="password"
            id="newAccountPassword"
            className="border-1 border-primary rounded-lg text-xl p-1 font-semibold focus:outline-none w-120 px-4 py-2"
          />
        </div>

        <button className="bg-primary/80 text-extra rounded-lg py-2 px-4 font-semibold transition-colors hover:bg-primary">
          Create Account
        </button>
      </form>
    </div>
  );
}
