import { component$ } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";

export const useAction = routeAction$((data) => {
  console.log("data", data);
  return { success: true, name: data.name };
});

export default component$(() => {
  const action = useAction();
  return (
    <>
      <Form
        action={action}
        class="mx-auto my-20 grid max-w-sm gap-4 rounded-lg bg-slate-200 p-10"
      >
        <input type="text" name="name" class="rounded p-2" placeholder="Name" />
        <button type="submit" class="rounded bg-slate-800 p-2 text-white">
          Submit
        </button>
      </Form>
    </>
  );
});
