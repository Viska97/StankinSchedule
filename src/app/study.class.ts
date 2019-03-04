export interface Study {
    hour: number;
    time: string;
    room: string;
    subject: string;
    study_type: string;
    teacher : string;
  }
  
export interface IStudyResponse {
    success : boolean;
    total: number;
    results: Study[];
}