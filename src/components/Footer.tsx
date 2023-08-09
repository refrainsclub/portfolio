import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <p className="text-center text-sm text-gray-400">
        © {year} James Blair. All rights reserved.
      </p>
    </Container>
  );
}
