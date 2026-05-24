import { FieldGroup, Field, FieldContent, FieldLabel, FieldSet } from "./ui/field"
import { Input } from "./ui/input"
export function Form() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            
            <form>
                <FieldSet>

                    <FieldGroup>
                        <Field>
                            <FieldLabel>Name</FieldLabel>
                            <FieldContent></FieldContent>
                        </Field>

                    </FieldGroup>
                </FieldSet>


            </form>

        </div>
    )
}