import { LoginForm, LoginHero, Logo } from "../login";

export default function Login() {
  return (
    <section className="font-nunito">
      <Logo />
      <LoginHero />
      <LoginForm />
    </section>
  );
}
