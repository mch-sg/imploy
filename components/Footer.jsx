import { Building } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 bg-background w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Building className="h-6 w-6" />
              <span className="text-xl font-bold">Acme</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Find your dream job with Acme, the leading job search platform.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">For Job Seekers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Salary Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">For Employers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Talent Search
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Recruitment Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Acme Job Search. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

