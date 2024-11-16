import { Button } from "@composable/react-ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@composable/react-ui/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@composable/react-ui/components/ui/form";
import { Input } from "@composable/react-ui/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@composable/react-ui/components/ui/select";
import { Textarea } from "@composable/react-ui/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const recipeFormSchema = z.object({
  name: z.string().min(2, "Recipe name must be at least 2 characters"),
  image: z.string().url("Must be a valid URL"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  prepTime: z.string(),
  cookTime: z.string(),
  totalTime: z.string(),
  recipeYield: z.string(),
  recipeCategory: z.string(),
  recipeCuisine: z.string(),
  recipeIngredient: z
    .array(z.string())
    .min(1, "At least one ingredient is required"),
  recipeInstructions: z
    .array(
      z.object({
        text: z.string().min(5, "Step must be at least 5 characters"),
      }),
    )
    .min(1, "At least one instruction step is required"),
  nutrition: z.object({
    calories: z.string(),
    fatContent: z.string(),
    proteinContent: z.string(),
    carbohydrateContent: z.string(),
  }),
});

export function RecipeForm() {
  const form = useForm<z.infer<typeof recipeFormSchema>>({
    resolver: zodResolver(recipeFormSchema),
    defaultValues: {
      recipeIngredient: [""],
      recipeInstructions: [{ text: "" }],
      nutrition: {
        calories: "",
        fatContent: "",
        proteinContent: "",
        carbohydrateContent: "",
      },
    },
  });

  const onSubmit = async (data: z.infer<typeof recipeFormSchema>) => {
    // Add submission logic here
    console.log(data);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create New Recipe</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipe Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Delicious Chocolate Cake"
                      autoComplete="off"
                      aria-autocomplete="none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="https://example.com/image.jpg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Describe your recipe..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="prepTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prep Time</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="PT30M" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cookTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cook Time</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="PT1H" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="recipeCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="appetizer">Appetizer</SelectItem>
                        <SelectItem value="main">Main Course</SelectItem>
                        <SelectItem value="dessert">Dessert</SelectItem>
                        <SelectItem value="beverage">Beverage</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="recipeCuisine"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cuisine</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select cuisine" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="italian">Italian</SelectItem>
                        <SelectItem value="mexican">Mexican</SelectItem>
                        <SelectItem value="indian">Indian</SelectItem>
                        <SelectItem value="chinese">Chinese</SelectItem>
                        <SelectItem value="japanese">Japanese</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <FormLabel>Ingredients</FormLabel>
              {form.watch("recipeIngredient").map((_, index) => (
                <div key={index} className="flex gap-2">
                  <FormField
                    control={form.control}
                    name={`recipeIngredient.${index}`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input {...field} placeholder="2 cups flour" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const ingredients = form.getValues("recipeIngredient");
                      if (ingredients.length > 1) {
                        form.setValue(
                          "recipeIngredient",
                          ingredients.filter((_, i) => i !== index),
                        );
                      }
                    }}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const ingredients = form.getValues("recipeIngredient");
                  form.setValue("recipeIngredient", [...ingredients, ""]);
                }}
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Ingredient
              </Button>
            </div>

            <div className="space-y-4">
              <FormLabel>Instructions</FormLabel>
              {form.watch("recipeInstructions").map((_, index) => (
                <div key={index} className="flex gap-2">
                  <FormField
                    control={form.control}
                    name={`recipeInstructions.${index}.text`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Describe the step..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const instructions = form.getValues("recipeInstructions");
                      if (instructions.length > 1) {
                        form.setValue(
                          "recipeInstructions",
                          instructions.filter((_, i) => i !== index),
                        );
                      }
                    }}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const instructions = form.getValues("recipeInstructions");
                  form.setValue("recipeInstructions", [
                    ...instructions,
                    { text: "" },
                  ]);
                }}
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Step
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nutrition.calories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Calories</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="240 calories" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nutrition.proteinContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Protein</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="10g" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Create Recipe
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
