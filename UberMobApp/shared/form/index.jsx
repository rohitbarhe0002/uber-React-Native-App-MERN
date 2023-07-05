import { View, Text } from 'react-native'
import { Formik } from 'formik';
import React from 'react'

const FormikForm = () => {
  return (
    <View>
       <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={{width:'100%'}}>
           <Text style={{ marginBottom: 5,marginLeft:5,color:'#000',fontSize:14 }}>Name</Text>
           <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           style={{borderColor:'#ccc',borderWidth:1,marginBottom: 15,borderRadius:15}}
         />
           <Text style={{ marginBottom: 5,marginLeft:5,color:'#000',fontSize:14 }}>Delivery Address</Text>
           <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           style={{borderColor:'#ccc',borderWidth:1,marginBottom: 15,borderRadius:15}}
           label="Email"
         />
           <Text style={{ marginBottom: 5,marginLeft:5,color:'#000',fontSize:14 }}>Price</Text>
           <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           style={{borderColor:'#ccc',borderWidth:1,marginBottom: 15,borderRadius:15}}
           label="Email"
         />
          
<View style={{justifyContent:'flex-start',flexDirection: 'row',alignItems:'center',marginTop: 10,marginBottom:10,gap:30}} >
<RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
    <Text style={{width: 100}}>Normal</Text>

      </View>
      <View  style={{justifyContent:'flex-start',flexDirection: 'row',alignItems:'center',marginBottom:10,gap:30}} >
<RadioButton
        value="first"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={{width: 100}}>Normal</Text>

      </View>
     <View style={{borderRadius:10}}>

 
         <Button onPress={handleSubmit} title="Submit" />
         </View>
       </View>
     )}
   </Formik>
    </View>
  )
}

export default FormikForm;