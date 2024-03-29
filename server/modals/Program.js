import mongoose from "mongoose"

const programSchema = new mongoose.Schema({
    Name: { type: String },
    intake: { type: String },
    ProgramLevel: { type: Number },
    year: { type: Number },
    Studylvl: { type: String },
    Country: { type: String },
    University: { type: String },
    Country1: { type: String },
    Duration: { type: Number },
    UniversityId: { type: Number },
    CountryId: { type: Number },
    EligibleUniversityStateId: { type: String },
    SatRequired: { type: Boolean },
    GmatRequired: { type: Boolean },
    ActRequired: { type: Boolean },
    GreRequired: { type: Boolean },
    IeltsRequired: { type: Boolean },
    ToeflRequired: { type: Boolean },
    PteRequired: { type: Boolean },
    DETRequired: { type: Boolean },
    WithoutMaths: { type: Boolean },
    WithoutEnglishProficiency: { type: Boolean },
    IeltsOverall: { type: Number },
    ToeflScore: { type: Number },
    PteScore: { type: Number },
    DETScore: { type: Number },
    TutionFee: { type: String },
    backlog: { type: Number },
    Currency: { type: String },
    Amount: { type: Number },
    IeltsNoBandLessThan: { type: Number },
    TOEFLNoSectionLessThan: { type: Number },
    PTENoSectionLessThan: { type: Number },
    FifteenYearsEducation: { type: Number },
    ScholarshipAvailable: { type: Boolean },
    Intakes: { type: String },
    UniversityOrder: { type: Number },
    CommissionToolTipMessage: { type: String },
    WebomatricsNationalRanking: { type: Number },
    WebomatricsWorldRanking: { type: Number },
    USNewsRanking: { type: Number },
    QSRanking: { type: Number },
    IsIndirect: { type: Boolean },
    commissionMode: { type: String },
    commissionAmount: { type: Number },
    CommissionCurrency: { type: String },
    IntakesClosed: { type: String },
    IsExtraChoicesOfPrograms: { type: Boolean },
    AppFeeWaiverAvailable: { type: Boolean },
    ApplicationFeeAmt: { type: Number },
    Mediator: { type: Number },
    IsOnlineCourse: { type: Boolean },
    IntakeDeadLines: { type: String },
    WorkExp: { type: Number },
    CategoryId: { type: String },
    SubCategoryId: { type: String },
    EligibleUniversityCountryStudyLevel: { type: String },
    IsDeadlinePassed: { type: Number }
});

const Program = mongoose.model('Program', programSchema);

export default Program;
