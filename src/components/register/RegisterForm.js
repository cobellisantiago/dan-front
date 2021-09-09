import PropTypes from 'prop-types';
import EmployeeRegister from './EmployeeRegister';
import ClientRegister from './ClientRegister';

const RegisterForm = ({ checkBoxValue }) => {
  if (checkBoxValue === 'employee') {
    return <EmployeeRegister />;
  }
  return <ClientRegister />;
};

RegisterForm.propTypes = {
  checkBoxValue: PropTypes.string
};

export default RegisterForm;
