import { LoginForm, LoginHero, LogoTitle } from "../login";

export default function Login() {
  return (
    <section className="font-nunito">
      <LogoTitle />
      <LoginHero />
      <LoginForm />
    </section>
  );
}
