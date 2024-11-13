export interface PerformanceReviewInterface {
    id: string;
    employeeId: string;
    managerId: string;
    reviewDate: Date;
    ratings: {
      technicalSkills: number;
      communication: number;
      teamwork: number;
      productivity: number;
      initiative: number;
    };
    comments: string;
    goals: string[];
    status: 'draft' | 'published' | 'acknowledged';
    createdAt: Date;
    updatedAt: Date;
}
