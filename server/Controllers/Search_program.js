import Program from "../modals/Program.js";
import { pagination } from "../common/pagination.js";
export const searchProgram = async (req, res) => {
    let data = {};
    try {
      const {
        courses,
        intakeMonth,
        intakeYear,
        page_no,
        number_of_rows,
        requirements,
        program_level,
        country,
        study_area,
        duration,
      } = req.query;
      let matchedObject = {};
      if (courses) {
        const escaped_search_text = courses.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        );
  
        matchedObject = {
          Name: { $regex: escaped_search_text, $options: "ims" },
        };
      }
      const countriesData = [
        "United States of America",
        "Australia",
        "Canada",
        "United Kingdom",
        "New Zealand",
        "Singapore",
        "Dubai",
        "Ireland",
        "Germany",
        "France",
        "Sweden",
        "Netherlands",
        "Austria",
        "Denmark",
        "Finland",
        "Italy",
        "Hungary",
        "Switzerland",
        "Spain",
        "Lithuania",
        "Cyprus",
        "Poland",
        "Malaysia",
        "Mauritius",
        "China",
        "Vietnam",
        "Malta",
        "Japan",
        "Belgium",
        "Russia",
        "South Korea",
        "India",
        "Georgia",
      ];
    if (country){
       const arr = JSON.parse(country)
       for(let elem of arr){
    
        if(countriesData.includes(elem)){
          matchedObject.Country = elem 
        }
       }
    }
      if (duration) {
        matchedObject.Duration = Number(duration)
      }
      if (study_area) {
        let arr = JSON.parse(study_area);
        arr.map(item => matchedObject.CategoryId = item)
      }
  
      if (program_level) {
        let arr = JSON.parse(program_level);
        arr.map(item => matchedObject.ProgramLevel = Number(item))
      }
      const intakeOptions = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      if (intakeMonth) {
        let arr = JSON.parse(intakeMonth);
        for (const elem of arr) {
          if (intakeOptions.includes(elem)){
            matchedObject.intake = elem
          }
     
        }
      }
  
      if (intakeYear) {
        matchedObject.year = Number(intakeYear);
      }
  
      if (requirements) {
        let arr = JSON.parse(requirements);
        for (const elem of arr) {
          if (elem === "GMAT") {
            matchedObject.GmatRequired = true;
          }
          if (elem === "SAT") {
            matchedObject.SatRequired = true;
          }
          if (elem === "IELTS") {
            matchedObject.IeltsRequired = true;
          }
          if (elem === "TOEFL") {
            matchedObject.ToeflRequired = true;
          }
          if (elem === "PTE") {
            matchedObject.PteRequired = true;
          }
          if (elem === "DET") {
            matchedObject.DETRequired = true;
          }
          if (elem === "ACT") {
            matchedObject.ActRequired = true;
          }
          if (elem === "GRE") {
            matchedObject.GreRequired = true;
          }
          if (elem === "Without English Proficiency") {
            matchedObject.WithoutEnglishProficiency = true;
          }
  
          if (elem === "Without Maths") {
            matchedObject.WithoutMaths = true;
          }
          if (elem === "Application Fee Waiver (upto 100%)") {
            matchedObject.AppFeeWaiverAvailable = true;
          }
          if (elem === "Scholarship Available") {
            matchedObject.ScholarshipAvailable = true;
          }
        }
      }
  
      let allPrograms = await Program.aggregate([
        {
          $match: matchedObject,
        },
        {
          $facet: {
            totalCount: [{ $count: "count" }],
            paginatedResults: [
              {
                $skip: Number(pagination(page_no, number_of_rows).skipDocuments),
              },
              {
                $limit: Number(pagination(page_no, number_of_rows).getDocuments),
              },
            ],
          },
        },
        { $unwind: "$totalCount" },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [
                "$totalCount",
                { paginatedResults: "$paginatedResults" },
              ],
            },
          },
        },
      ]);
  
      data = allPrograms;
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ err: error.message });
    }
  };