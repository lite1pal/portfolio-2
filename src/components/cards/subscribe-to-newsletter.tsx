import { Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function SubscribeToNewsletter() {
  return (
    <div className="card w-full rounded-xl border border-neutral/5 bg-accent/20 text-accent-content">
      <div className="card-body">
        <div className="flex items-center gap-3 text-sm font-semibold">
          <Mail className="h-5 w-5" /> Get my updates first
        </div>
        <p className="text-sm">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>
        <div className="mt-3 flex w-full max-w-xl items-center gap-3">
          <Input placeholder="Your email" />
          <Button
            variant="outline"
            className="border-none bg-primary text-white"
          >
            Join
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeToNewsletter;
