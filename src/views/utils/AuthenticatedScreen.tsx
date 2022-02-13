export function AuthenticatedScreen(props: { children: React.ReactNode }) {
  return (
    <div>
      Authenticated
      <div>{props.children}</div>
    </div>
  );
}
