import StudentRegistration from "../modals/studentRegister.js";

export const registerStudent = async (req, res) => {
  try {
    const { name, email, phoneNo, createdBy } =
      req.body;


    const newStudent = new StudentRegistration({
      name,
      email,
      phoneNo,
      createdBy,
    });

    const existingStudentByEmail = await StudentRegistration.findOne({
      email: email,
    });
    const existingStudentByPhone = await StudentRegistration.findOne({
      phoneNo: phoneNo,
    });
    if (existingStudentByEmail && existingStudentByPhone) {
      return res
        .status(400)
        .json({ error: "Email and phone number already exist" });
    } else if (existingStudentByEmail) {
      return res.status(400).json({ error: "Email already exists" });
    } else if (existingStudentByPhone) {
      return res.status(400).json({ error: "Phone number already exists" });
    }

    await newStudent.save();

    const responseData = {
      _id: newStudent._id,
    };

    return res.status(201).json(responseData);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



  export const getAllStudent = async (req, res) => {
    try {
      const allStudents = await StudentRegistration.find();
      if (!allStudents || allStudents.length === 0) {
        return res.status(404).json({ message: 'No students found' });
      }
      const responseData = allStudents.map(student => ({
        _id: student._id,
        name: student.name,
        email: student.email,
        phoneNo: student.phoneNo,
        createdAt: student.createdAt,
        createdBy: student.createdBy,
      }));
  
      return res.status(200).json(responseData);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  export const getStudentById = async (req, res) => {
    try {
      const { id } = req.params; 
      const student = await StudentRegistration.findById(id);
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      return res.status(200).json(student);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };



  export const StudentInfoSave = async (req, res) => {
    try {
      const {
        _id,
        dob,
        gender,
        maritalStatus,
        address1,
        address2,
        country,
        state,
        city,
        pinCode,
        secodeAddress1,
        secodeAddress2,
        secodeCountry,
        secondeState,
        secondeCity,
        secodePinCode,
        passportNo,
        issueDate,
        expiryData,
        issueCountry,
        cityOfBirth,
        countryOfBirth,
        nationality,
        citizenship,
        isApplicanTACitizenOfMoreThanOneCountry,
        IsTheApplicantLivingAndStudyingInAnyOtherCountry,
        otherNationality,
        livingCountry,
        isApplicantImmigration,
        immigratedCountry,
        DoesApplicantseriousMedicalCondition,
        medicalCondition,
        HasApplicantVisaRefusalForAnyCountry,
        refusalVisaCountryName,
        refusalVisaType,
        HasApplicantEverBeenConvictedOfACriminalOffence,
        criminalOffenceType,
        EmergencyContactsName,
        EmergencyContactsEmail,
        EmergencyContactsPhone,
        EmergencyContactsRelationWithApplicant,
        position,
        nameofTheOrganisationAndAddress,
        jobProfile,
        workingFrom,
        workingUpto,
        modeOfSalary,
        iAmCurrentlyWorkingHere,
        grade12th,
        grade10th,
        postgraduate,
        undergraduate,
        highLevelEducation,
        countryOfEducation,
        studentTests,
      } = req.body;

      if (!_id) {
        return res.status(400).json({ error: "Missing _id parameter" });
      }
  
      const existingStudent = await StudentRegistration.findById(_id);
  
      if (!existingStudent) {
        return res.status(404).json({ error: "Student not found" });
      }

      existingStudent.dob = dob || existingStudent.dob;
      existingStudent.gender = gender || existingStudent.gender;
      existingStudent.maritalStatus = maritalStatus || existingStudent.maritalStatus;
      existingStudent.address1 = address1 || existingStudent.address1;
      existingStudent.address2 = address2 || existingStudent.address2;
      existingStudent.country = country || existingStudent.country;
      existingStudent.state = state || existingStudent.state;
      existingStudent.city = city || existingStudent.city;
      existingStudent.pinCode = pinCode || existingStudent.pinCode;
      existingStudent.secodeAddress1 = secodeAddress1 || existingStudent.secodeAddress1;
      existingStudent.secodeAddress2 = secodeAddress2 || existingStudent.secodeAddress2;
      existingStudent.secodeCountry = secodeCountry || existingStudent.secodeCountry;
      existingStudent.secondeState = secondeState || existingStudent.secondeState;
      existingStudent.secondeCity = secondeCity || existingStudent.secondeCity;
      existingStudent.secodePinCode = secodePinCode || existingStudent.secodePinCode;
      existingStudent.passportNo = passportNo || existingStudent.passportNo;
      existingStudent.issueDate = issueDate || existingStudent.issueDate;
      existingStudent.expiryData = expiryData || existingStudent.expiryData;
      existingStudent.issueCountry = issueCountry || existingStudent.issueCountry;
      existingStudent.cityOfBirth = cityOfBirth || existingStudent.cityOfBirth;
      existingStudent.countryOfBirth = countryOfBirth || existingStudent.countryOfBirth;
      existingStudent.nationality = nationality || existingStudent.nationality;
      existingStudent.citizenship = citizenship || existingStudent.citizenship;
      existingStudent.isApplicanTACitizenOfMoreThanOneCountry = isApplicanTACitizenOfMoreThanOneCountry || existingStudent.isApplicanTACitizenOfMoreThanOneCountry;
      existingStudent.IsTheApplicantLivingAndStudyingInAnyOtherCountry = IsTheApplicantLivingAndStudyingInAnyOtherCountry || existingStudent.IsTheApplicantLivingAndStudyingInAnyOtherCountry;
      existingStudent.otherNationality = otherNationality || existingStudent.otherNationality;
      existingStudent.livingCountry = livingCountry || existingStudent.livingCountry;
      existingStudent.isApplicantImmigration = isApplicantImmigration || existingStudent.isApplicantImmigration;
      existingStudent.immigratedCountry = immigratedCountry || existingStudent.immigratedCountry;
      existingStudent.DoesApplicantseriousMedicalCondition = DoesApplicantseriousMedicalCondition || existingStudent.DoesApplicantseriousMedicalCondition;
      existingStudent.medicalCondition = medicalCondition || existingStudent.medicalCondition;
      existingStudent.HasApplicantVisaRefusalForAnyCountry = HasApplicantVisaRefusalForAnyCountry || existingStudent.HasApplicantVisaRefusalForAnyCountry;
      existingStudent.refusalVisaCountryName = refusalVisaCountryName || existingStudent.refusalVisaCountryName;
      existingStudent.refusalVisaType = refusalVisaType || existingStudent.refusalVisaType;
      existingStudent.HasApplicantEverBeenConvictedOfACriminalOffence = HasApplicantEverBeenConvictedOfACriminalOffence || existingStudent.HasApplicantEverBeenConvictedOfACriminalOffence;
      existingStudent.criminalOffenceType = criminalOffenceType || existingStudent.criminalOffenceType;
      existingStudent.EmergencyContactsName = EmergencyContactsName || existingStudent.EmergencyContactsName;
      existingStudent.EmergencyContactsEmail = EmergencyContactsEmail || existingStudent.EmergencyContactsEmail;
      existingStudent.EmergencyContactsPhone = EmergencyContactsPhone || existingStudent.EmergencyContactsPhone;
      existingStudent.EmergencyContactsRelationWithApplicant = EmergencyContactsRelationWithApplicant || existingStudent.EmergencyContactsRelationWithApplicant;
      existingStudent.position = position || existingStudent.position;
      existingStudent.nameofTheOrganisationAndAddress = nameofTheOrganisationAndAddress || existingStudent.nameofTheOrganisationAndAddress;
      existingStudent.jobProfile = jobProfile || existingStudent.jobProfile;
      existingStudent.workingFrom = workingFrom || existingStudent.workingFrom;
      existingStudent.workingUpto = workingUpto || existingStudent.workingUpto;
      existingStudent.modeOfSalary = modeOfSalary || existingStudent.modeOfSalary;
      existingStudent.iAmCurrentlyWorkingHere = iAmCurrentlyWorkingHere || existingStudent.iAmCurrentlyWorkingHere;

      existingStudent.grade12th = grade12th || existingStudent.grade12th;
      existingStudent.grade10th = grade10th || existingStudent.grade10th;
      existingStudent.postgraduate = postgraduate || existingStudent.postgraduate;
      existingStudent.undergraduate = undergraduate || existingStudent.undergraduate;
      existingStudent.highLevelEducation = highLevelEducation || existingStudent.highLevelEducation;
      existingStudent.countryOfEducation = countryOfEducation || existingStudent.countryOfEducation;
      existingStudent.studentTests =
        studentTests || existingStudent.studentTests;
      await existingStudent.save();
      return res.status(200).json({ message: "Student data saved successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };



 export const updateStudentInfo = async (req, res) => {
    try {
      const { id } = req.params;
      const { name ,email, phoneNo } = req.body;
      const student = await StudentRegistration.findById(id);
      if (name) {
        student.name = name;
      }
      if (email) {
        student.email = email;
      }
      if (phoneNo) {
        student.phoneNo = phoneNo;
      }
      await student.save();
      res.status(200).json({ message: 'Student data updated successfully' });
    } catch (error) {
      console.error('Error updating student info:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };