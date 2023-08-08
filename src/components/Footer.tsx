export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-900">
      <div className="container mx-auto p-4 py-8 text-center">
        <p className="text-sm text-gray-400">
          © {year} James Blair. All rights reserved.
        </p>
      </div>
    </div>
  );
}
