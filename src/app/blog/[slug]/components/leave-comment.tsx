import { Quote } from "lucide-react";

function LeaveComment() {
  return (
    <div className="mx-auto w-full space-y-7 rounded-xl p-7 shadow">
      <div className="font-medium">Add a new comment</div>
      <div className="flex gap-3">
        <div>
          <img src="/me.jpg" className="h-10 w-10 rounded-xl object-cover" />{" "}
        </div>
        <div className="flex w-full flex-col gap-3">
          <textarea
            rows={3}
            placeholder="Type your message..."
            className="rounded-xl border bg-gray-50 p-3"
          ></textarea>
          <div className="flex items-center justify-between">
            <div className="item-center flex gap-3 text-gray-500">
              <Quote className="h-4 w-4" />
              Some HTML is ok
            </div>
            <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-50 hover:text-slate-900">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveComment;
