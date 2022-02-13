import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import { Button, Grid } from "@chakra-ui/react"
import { INPUT } from "../types/dataEntryFieldTypes"
import { Input } from "./Input"

interface Props {
  fields : IndexedObject
  onSubmit : (data:any) => void
  renderButtons? : any
  validationSchema : any
  isSubmitting ? : boolean
  defaultValues ? : IndexedObject
  fieldColumnSizeXs? : number 
}

export const Form = ({
  fields,
  validationSchema,
  isSubmitting = false,
  renderButtons,
  onSubmit,
  defaultValues,
  fieldColumnSizeXs = 12
  } : Props) => {

    const fieldObjectKeys = Object.keys(fields) as Array<keyof typeof fields>

    let preparedDefaultValues : any = {}
    if ( defaultValues) {
      preparedDefaultValues = defaultValues
    } else {
      fieldObjectKeys.forEach((fieldName : string) => {
        const field = fields[fieldName]
        if (field.defaultValue ){
          preparedDefaultValues[fieldName] = field.defaultValue 

        }
        //  default value of controller can be used if not supplied here
      })
    }

    const {handleSubmit, control} = useForm({
      defaultValues : preparedDefaultValues,
      mode : 'onChange',
      resolver : validationSchema ? yupResolver(validationSchema) : undefined
    })

    const renderDefaultButtons = (
      <Grid item xs={12}>
        <Button
          isSubmitting
          loadingText='Submitting'
          colorScheme='teal'
          variant='outline'
        >
        Submit
        </Button>
      </Grid>
    )

    return (
      <form onSubmit= { handleSubmit(onSubmit)} >
        <Grid container rowGap={3} columnGap={{xs:5,sm:5, md:6}} >
        {fieldObjectKeys.map((fieldName : string) => {
          let renderCurrentField = null
          const field = fields[fieldName]
          if(field) {const {meta, ...rest} = field
          switch ( meta.fieldType) {
            case INPUT : {
              renderCurrentField = (
                <Input control={control} name={fieldName} {...rest}/>
              )
              break
            }
            default :
            renderCurrentField = null
          }
          return (
            <Grid item xs={meta.fieldXs ? meta.fieldXs : fieldColumnSizeXs} key={fieldName}>
              {renderCurrentField}
            </Grid>
          )
        }
        return null
          
        })}
        {renderButtons? renderButtons : renderDefaultButtons }
        </Grid>
      </form>
    )
}