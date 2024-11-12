export interface TasksInterface {
    id: number;
    projectId: number;
    title: string;
    description: string;
    status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED';
    createdAt: Date;
    updatedAt: Date;
}
