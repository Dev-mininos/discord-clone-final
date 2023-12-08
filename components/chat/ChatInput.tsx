"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Plus, Smile } from "lucide-react";
const formSchema = z.object({
  context: z.string().min(1),
});
interface ChatInputProps {
  apiUrl: string;
  query: Record<string, any>;
  name: string;
  type: "conversation" | "channel";
}
export const ChatInput: React.FC<ChatInputProps> = ({
  apiUrl,
  query,
  name,
  type,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      context: "",
    },
    resolver: zodResolver(formSchema),
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="context"
          render={({ field }) => (
            <FormControl>
              <div className="relative p-4 pb-6">
                <button
                  type="button"
                  onClick={() => {}}
                  className="absolute left-8 top-7 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-zinc-500 p-1 transition hover:bg-zinc-600 dark:bg-zinc-400 dark:hover:bg-zinc-300"
                >
                  <Plus className="text-white dark:text-[#313338]" />
                </button>
                <Input
                  {...field}
                  placeholder={`Message ${
                    type === "conversation" ? name : "#" + name
                  }`}
                  disabled={isLoading}
                  className="border-0 border-none bg-zinc-200/90 px-14 py-6 text-zinc-600 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-zinc-700/75 dark:text-zinc-200"
                />
                <div className="absolute right-8 top-7">
                  <Smile />
                </div>
              </div>
            </FormControl>
          )}
        />
      </form>
    </Form>
  );
};
