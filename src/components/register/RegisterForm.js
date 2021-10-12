import PropTypes from 'prop-types';
import EmployeeRegister from './EmployeeRegister';
import ClientRegister from './ClientRegister';

const RegisterForm = ({
 checkBoxValue, setClient, setEmployee, disabledButton
}) => {
  if (checkBoxValue === 'employee') {
    return <EmployeeRegister setEmployee={(e) => setEmployee(e)} disabledButton={disabledButton} />;
  }
  return <ClientRegister setClient={(c) => setClient(c)} disabledButton={disabledButton} />;
};

RegisterForm.propTypes = {
  checkBoxValue: PropTypes.string
};

export default RegisterForm;
