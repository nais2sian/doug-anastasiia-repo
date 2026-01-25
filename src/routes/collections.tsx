import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/collections")({
  component: Collections,
});

function Collections() {
  return <div className="p-2">Hello from About!</div>;
}
