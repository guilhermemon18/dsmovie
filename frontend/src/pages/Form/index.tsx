import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';





function Form() {
   
    //permite pegar os parâmetros fornecidos na url.
    const params = useParams();

    return (
         <FormCard movieId={`${params.movieId}`}/>  
    );
}
export default Form;