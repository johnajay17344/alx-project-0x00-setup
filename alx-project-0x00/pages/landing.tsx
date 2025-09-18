// pages/landing.tsx
import Button from "../components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Required button instances */}
      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
  );
};

export default Landing;
