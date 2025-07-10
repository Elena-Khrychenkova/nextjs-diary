"use client";

import { createFoodIntakeLog } from "@/app/actions";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { formSchema } from "@/lib/zod";

export default function FoodIntakeForm({
  initialState,
  session,
}: {
  initialState: { message: string };
  session: any;
}) {
  const [state, formAction] = useActionState(createFoodIntakeLog, initialState);
  const date = new Date().toISOString().split("T")[0];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_email: session?.user?.email ?? "",
      date: date,
      mood: undefined,
      activity: undefined,
      water: undefined,
      foodType: [],
      portionSize: undefined,
      sleep: undefined,
      weight: undefined,
    },
  });
  const foodTypes = [
    {
      id: "Vegetables",
      label: "Vegetables",
      name: "Vegetables",
    },
    {
      id: "Fruits",
      label: "Fruits",
      name: "Fruits",
    },
    {
      id: "Dairy",
      label: "Dairy",
      name: "Dairy",
    },
    {
      id: "Meat",
      label: "Meat",
      name: "Meat",
    },
    {
      id: "Fish",
      label: "Fish",
      name: "Fish",
    },
    {
      id: "Grain",
      label: "Grain",
      name: "Grain",
    },
    {
      id: "Sweets",
      label: "Sweets",
      name: "Sweets",
    },
    {
      id: "Fast Food",
      label: "Fast Food",
      name: "Fast Food",
    },
    {
      id: "Processed",
      label: "Processed",
      name: "Processed",
    },
    {
      id: "Homemade",
      label: "Homemade",
      name: "Homemade",
    },
  ] as const;
  return (
    <Form {...form}>
      <form action={formAction} className="flex flex-col mt-20 gap-20">
        <div className="flex justify-center gap-20 ">
          <div className="flex flex-col gap-10">
            <input
              type="hidden"
              {...form.register("user_email")}
              value={session.user.email}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input placeholder="Date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mood"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mood</FormLabel>
                  <FormControl>
                    <div>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Happy">Happy</SelectItem>
                          <SelectItem value="Neutral">Neutral</SelectItem>
                          <SelectItem value="Sad">Sad</SelectItem>
                          <SelectItem value="Stressed">Stressed</SelectItem>
                          <SelectItem value="Tired">Tired</SelectItem>
                          <SelectItem value="Energetic">Energetic</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        name="mood"
                        value={field.value ?? ""}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    What was your mood when you started your meal?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="activity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Level</FormLabel>
                  <FormControl>
                    <div>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="None">None</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        name="activity"
                        value={field.value ?? ""}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>How active you were today?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="water"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Water Intake</FormLabel>
                  <FormControl>
                    <div>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        name="water"
                        value={field.value ?? ""}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Did you drink a glass of water 20 min before your meal?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="foodType"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Food Type</FormLabel>
                    <FormDescription>
                      Select the items you want to display in the sidebar.
                    </FormDescription>
                  </div>
                  {foodTypes.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="foodType"
                      render={({ field }) => {
                        const selectedValues = field.value ?? [];
                        const isChecked = selectedValues.includes(item.id);
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <div>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([
                                        ...selectedValues,
                                        item.id,
                                      ]);
                                    } else {
                                      field.onChange(
                                        selectedValues.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                    }
                                  }}
                                />
                                {isChecked && (
                                  <input
                                    type="hidden"
                                    name="foodType"
                                    value={item.id}
                                  />
                                )}
                              </div>
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-10">
            <FormField
              control={form.control}
              name="portionSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Portion Size</FormLabel>
                  <FormControl>
                    <div>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Small">Small</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Large">Large</SelectItem>
                          <SelectItem value="Extra Large">
                            Extra Large
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        name="portionSize"
                        value={field.value ?? ""}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>How much did you eat?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sleep"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sleep Hours</FormLabel>
                  <FormControl>
                    <div>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Less than 6">
                            Less than 6
                          </SelectItem>
                          <SelectItem value="6-7">6-7</SelectItem>
                          <SelectItem value="7-8">7-8</SelectItem>
                          <SelectItem value="More than 8">
                            More than 8
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        name="sleep"
                        value={field.value ?? ""}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    How much did you sleep today?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight Changes</FormLabel>
                  <FormControl>
                    <div>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Down">Down</SelectItem>
                          <SelectItem value="Same">Same</SelectItem>
                          <SelectItem value="Up">Up</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        name="weight"
                        value={field.value ?? ""}
                      />
                    </div>
                  </FormControl>

                  <FormDescription>
                    Did you notice any changes in your weight?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
