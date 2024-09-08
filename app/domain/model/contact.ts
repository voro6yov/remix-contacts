export class Contact {
    id: string;
    first?: string;
    last?: string;
    avatar?: string;
    twitter?: string;
    notes?: string;
    favorite?: boolean;
    createdAt: string;
  
    constructor(id: string) {
      this.id = id;
  
      this.createdAt = new Date().toISOString();
    }
  
    update_info(first?: string, last?: string, avatar?: string, twitter?: string, notes?: string, favorite?: boolean) {
      this.first = first || this.first;
      this.last = last || this.last;
      this.avatar = avatar || this.avatar;
      this.twitter = twitter || this.twitter;
      this.notes = notes || this.notes;
      this.favorite = favorite || this.favorite;
    }
  }